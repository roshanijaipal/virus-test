import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [comp,setComp] = useState('')
    const [people,setPeople] = useState('')
    const [peopleArray, setPeopleArray] = useState([])

    const onsubmit = (e)=>{
        e.preventDefault()
    console.log("sesssss",comp)


        let vircusCompostion = comp; //Virus composition
        let totalPeople = people; //number of people
        let bloodComposition = ['abcde', 'crnas', 'onerous', 'viruscorona']; //the blood composition of the ith person
        let result = {};

        bloodComposition.forEach((composition) => {
            let m = composition.length;
            let n = vircusCompostion.length;
            let res = checkSubsequence(composition, vircusCompostion, m, n);
            result[composition]=res;
        });

        for (const report in result) {

            console.log(result[report]);
        }
    }

    function checkSubsequence(str1, str2, m, n)
    {
        if (m === 0)
            return 'POSITIVE';
        if (n === 0)
            return 'NEGATIVE';

        if (str1[m - 1] === str2[n - 1])
            return checkSubsequence(str1, str2,
                m - 1, n - 1);


        return checkSubsequence(str1, str2, m, n - 1);
    }




    return (

    <div className="row m-5">
        <form onSubmit={onsubmit}>
            <div className="col-6 mb-2">
                <input  id='comp'  name='comp' type='text' placeholder='enter a value' className='font-weight-normal'
                        value={comp} onChange={(e)=>setComp(e.target.value)}
                />
            </div>
            <div className="col-6 mb-2">
                <input  id='people'  name='people' type='number' placeholder='enter a people' className='font-weight-normal'
                        value={people} onChange={(e)=>{setPeople(e.target.value)
                        ; let values= []
                        values.push(e.target.value)
                    console.log("values",values)
                        setPeopleArray(values)
                    console.log("value",values,peopleArray)

                        }
                        } maxLength={4}
                />
            </div>
            {
                peopleArray.map((item,key)=>(
                    <input  id='people'  key={key} name='people' type='number' placeholder='enter a people' className='font-weight-normal'
                     maxLength={4}
                    />
                ))
            }
            <div className="col-12">
                <button name='submit' type='submit' >Submit</button>
            </div>
        </form>



    </div>
  );
}

export default App;
