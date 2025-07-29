"use client";
import { upload } from "@/app/actions";
import { ALLOWED_TYPES, MAX_FILE_SIZE } from "@/app/constants";
import { formatFileSize } from "@/app/utils";
import { useState } from "react";

const Form = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleUpload = async (formData: FormData) => {
        const result = await upload(formData);
        if (!result.success) {
            setErrorMessage(result.message);
        } else {
            setErrorMessage(null);
        }
    };

    return (
        <div className="mx-[10%]">
            <div className="p-6  rounded-xl bg-[#345F80] m-10 border border-[#345F80]">
                <form action={handleUpload}>
                    <div className="space-y-4">
                        <div className="rounded-xl p-6 bg-[#4F7FA0]">
                            <input
                                name="file"
                                type="file"
                                accept={Object.keys(ALLOWED_TYPES).join(",")}
                                className="text-[#ffff] file:p-2 file:rounded-lg file:border-0 file:bg-[#bd93f9] hover:file:bg-[#ff79c6]"
                            />
                            <p className="mt-2 text-[#ffff]">
                                Max file size: {formatFileSize(MAX_FILE_SIZE)}
                            </p>
                        </div>
                        {errorMessage && <p className="text-[#ff5555]">{errorMessage}</p>}
                        <button
                            type="submit"
                            className="w-full p-2 bg-[#bd93f9] rounded-xl hover:bg-[#DB2777] hover:text-white transition-all duration-300 ease-in-out"
                        >
                            Upload File
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export { Form };