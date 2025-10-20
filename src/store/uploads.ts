import { create } from "zustand";

type Upload = {
    name: string
    file: File
}

type UploadState = {
    uploads: Map<string, Upload>
    addUploads: (files: File[]) => void
}

export const useUploads = create <UploadState> ((set, get) => {
    function addUploads(files: File[]) {
        console.log(files)
    }

    return {
        uploads: new Map(),
        addUploads()
    }
})