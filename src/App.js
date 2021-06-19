import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

    const [num, setNum] = useState(0)

    const IncNum = () => {
        setNum(num + 1);
    }

    const DecNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            alert("Sorry can't go beyond zero !!! LIMIT Reached. ")
        }

    }

    return (
        <>
            <div className="main_div">
                <div className='center_div'>
                    <h1>{num}</h1>

                    <div className='btn_div'>
                        <Tooltip title="Add">
                            <Button onClick={IncNum}><AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button onClick={DecNum}><DeleteIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>


        </>

    )
}

export default App;