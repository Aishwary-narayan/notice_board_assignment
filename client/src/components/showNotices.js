
import React, { useState, useEffect  } from "react";
import DatePicker from 'react-date-picker';
import './../App.css';


function ShowNotices() {
    let response = [];

    const [date_fetched, setDate] = useState(new Date());
    const [notice, setNotice] = useState([]);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            console.log(date_fetched);
            const q = date_fetched.toDateString();
            // console.log(q);
            const data = await fetch("http://localhost:5000/notices/" + q, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            response = await data.json()
            setNotice(response);
        } catch (err) { console.log(err.message) }
    }
    console.log(notice);
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div className='date-picker' >
                    <DatePicker
                        // selected={null}
                        dateFormat="YYYY-MM-DD"
                        value={date_fetched}
                        onChange={date => setDate(date)}

                    />

                </div>

                <div className='submit-btn'>
                    <button className="btn btn-success">SUBMIT</button>
                </div>
                <div>
                <table class="table mt-5 text-center" >
    <thead>
      <tr>
        <th>Notice Poster</th>
        <th>Notice Details</th>
        <th>Hostel Number</th>
        <th>Expiring Date</th>
      </tr>
    </thead>
    <tbody>
        {notice.map(result =>(
            <tr>
            <td>{result.notice_poster}</td>
            <td>{result.notice_text}</td>
            <td>{result.hostel_name}</td>
            <td>{result.expiry_dare}</td>
          </tr>
        ))}
    </tbody>
  </table>
                    </div>

            </form>
        </div>
    );
}


export default ShowNotices;
