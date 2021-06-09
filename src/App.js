import './App.css';
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [comp,setComp] = useState('')
    const [people,setPeople] = useState('')
    const [peopleArray, setPeopleArray] = useState([])
    const [blodcomp, setBlodcomp] = useState([])
    const [results, setResult] = useState([])

    useEffect(()=>{
        if(people){
            updateInputsArray(1,people)
        }
    },[people])

    const onsubmit = (e)=>{
        e.preventDefault()
        let vircusCompostion = comp; //Virus composition
        let totalPeople = people; //number of people
        let bloodComposition = blodcomp; //the blood composition of the ith person
        let result = {};

        bloodComposition.forEach((composition) => {
            let m = composition.length;
            let n = vircusCompostion.length;
            let res = checkSubsequence(composition, vircusCompostion, m, n);
            result[composition]=res;
        });

        for (const report in result) {
            let resultReport =[];
            resultReport.push((result[report]))
            setResult(resultReport)
            console.log(result[report]);
        }
        return result
    }

    const  checkSubsequence=(str1, str2, m, n)=> {
        if (m === 0)
            return 'POSITIVE';
        if (n === 0)
            return 'NEGATIVE';
        if (str1[m - 1] === str2[n - 1])
            return checkSubsequence(str1, str2,
                m - 1, n - 1);
        return checkSubsequence(str1, str2, m, n - 1);

    }




    const updateInputsArray=(index, newValue) =>{
        let keyStore = []
        for (index of range(index, newValue)) {

            keyStore.push(index)
            console.log(peopleArray,keyStore);
        }
        setPeopleArray(keyStore)
    }
    const  range= (start, end) =>{
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const blodCompValueFun = (e,i) => {
        let items = [...blodcomp];
        if(e.target.value){
            items.push(e.target.value)
            setBlodcomp(items)
            return items;
        }
    }


    return (

    <div className="row m-5">
        <p>Covid testing</p>
        <form onSubmit={onsubmit}>
            <div className="col-6 mb-2">
                <input  id='comp'  name='comp' type='text' placeholder='enter a value' className='font-weight-normal'
                        value={comp} onChange={(e)=>setComp(e.target.value)}
                />
            </div>
            <div className="col-6 mb-2">
                <input  id='people'  name='people' type='number' placeholder='enter a people number' className='font-weight-normal'
                        value={people} onChange={(e)=>{setPeople(e.target.value);}} maxLength={4}
                />
            </div>
            {
                peopleArray && peopleArray.map((item,key)=>(
                    <div key={key}>
                        <input  id={`blodcomp${key}`}  name={`blodcomp${[key]}`} type='text' value={blodcomp[key]} onChange={(e)=>{
                            blodCompValueFun(e,key)

                        }} placeholder='enter a bloodCompostion' className='font-weight-normal'


                        />
                    </div>


                ))
            }
            <div className="col-12 mt-2">
                <button name='submit' type='submit' >Submit</button>
            </div>
            <div className="col-12">
                {
                    results && results.map((item,key)=>(
                        <p key={key}>Covid result {item}</p>
                    ))
                }
            </div>
        </form>





    </div>
  );
}

export default App;
