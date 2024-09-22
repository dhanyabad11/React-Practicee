import React, { useState } from "react";

function FormInput() {
    const [name, setName] = useState('');

    return (
        <form>
            <input type="text"value={name} onChange={(e) => setName(e.target.value)}
            placeholder="enter your name"
            />
            <p>hello, {name || 'stranger'}</p>
        </form>
    );
}
export default FormInput;