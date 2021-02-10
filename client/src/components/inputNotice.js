
import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import "./../index.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './../App.css';

const InputNotice = () => {
    const [notice_poster, setPoster] = useState("");
    const [notice_text, setText] = useState("");
    const [expiry_dare, setDate] = useState(new Date());
    const [hostel_name, setName] = useState("hostel");
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { notice_poster, notice_text, hostel_name,expiry_dare};

            console.log("hostel_name :: ", hostel_name);

            const response = await fetch("http://localhost:5000/notices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) { console.log(err.message) }
    }
    return (
        <div className='container'>
            <h1 className="text-center mt-5">Notice portal sample </h1>
            <form onSubmit={onSubmitForm}>
                <div>
                    <h3 > Poster
      <input
                            type="text"
                            className="form-control"
                            value={notice_poster}
                            onChange={e => setPoster(e.target.value)}
                        />
                    </h3>
                </div>
                <div>
                    <h3> Notice
      <input
                            type="text"
                            className="form-control"
                            value={notice_text}
                            onChange={e => setText(e.target.value)}
                        />
                    </h3>
                </div>
                <h3>Notice Expiry Date</h3>
                <div className='date-picker' >
                    <DatePicker
                        // selected={null}
                        dateFormat="YYYY-MM-DD"
                        value ={expiry_dare}
                        onChange={date => setDate(date)}
                        
                         />
                       
                </div>
                <h3>Select Hostel</h3>
                <div className="dropdown">
                    <Dropdown
                        options={["H1", "H2", "H3", "H4"]}
                        onChange={val => setName(val.value)}
                        value={hostel_name}
                        placeholder="Select an option" />



                </div>
                <div className='submit-btn'>
                    <button className="btn btn-success">SUBMIT</button>
                </div>
            </form>


        </div>
    )
};

export default InputNotice;
