"use client"

import supabase from '@/lib/supabase'
import { Canvas, extend } from '@react-three/fiber'
import { useEffect, useState } from 'react'

import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three'

extend({ Mesh, BoxGeometry, MeshStandardMaterial })

import { FileObject, Bucket } from "@supabase/storage-js/src/lib/types"

const DiceCube = () => {
    const [data, setData] = useState<Bucket>()
    const [error, setError] = useState<Error>()

    useEffect(() => {
        getFiles().then((res) => {
            if (res) setData(res!); else setError({ message: "unknown error", name: "Unknown error" })
        }).catch((err) => setError(err))
    }, [])

    console.log({
        data: data,
        error: error
    });

    return (
        <Canvas>
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    )
}

export default DiceCube

async function getFiles() {

    const { data, error } = await supabase.storage.getBucket("tatanation-nextjs-template")
    if (data) return data; else throw error;
}