"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

function GoButtonBack() {

    const router = useRouter()

  return (
    <button onClick={()=> router.back()} className="cursor-pointer">
      <FaArrowLeft size={20} />
    </button>
  );
}

export default GoButtonBack;
