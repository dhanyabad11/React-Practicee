import React, { useState} from 'react';


function UserProfile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isStudent, setIsStundent] = useState(false);

    return (
        <div>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
             />
             <input 
             type="number"
             value={age}
             onChange={(e) => setAge(Number(e.target.value))}
             placeholder='age'
             
              />
              <label>
                <input
                type="checkbox"
                checked={isStudent}
                onChange={(e) => setIsStundent(e.target.checked)}
                />
                Is a student
              </label>
              <p>Name: {name}, Age: {age}, Student: {isStudent ? 'yes' : 'no'}</p>
        </div>
    );
    
}
export default UserProfile;