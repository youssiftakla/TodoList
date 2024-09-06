import React, { useState } from "react";
interface  AddSelectToFormProps {
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;  // Proper typing for setStatus
  }

const AddSelectToForm : React.FC<AddSelectToFormProps> = ({ status, setStatus }) => {
    return (
        <form >
            <select 
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
           
        </form>
    );
}

export default AddSelectToForm;