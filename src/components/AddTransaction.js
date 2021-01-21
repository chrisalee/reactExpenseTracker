import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (event) => {
        event.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }   

    return (
        <div className='addTransaction'>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Name:</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(event) => {
                            setText(event.target.value)
                        }}
                        placeholder='Enter transaction...' />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount:
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(event) => {
                            setAmount(event.target.value)
                        }}
                        placeholder='Enter amount...' />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
