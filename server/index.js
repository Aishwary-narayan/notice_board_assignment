const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
//create a notice
app.post("/notices",async (req,res)=>{
    try{
        const {notice_poster,notice_text,hostel_name,expiry_dare} = req.body;
        let a = convertDate(new Date(expiry_dare));
        const newNotice = await pool.query("INSERT INTO notice_details (notice_poster,notice_text,hostel_name,expiry_dare) VALUES($1,$2,$3,$4) RETURNING *",
        [notice_poster,notice_text,hostel_name,a])
        res.json(newNotice.rows[0]);
    }
    
    catch(err){
        console.log(err.message);
    }
});

//get a notice through date requested
app.get("/notices/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const date = convertDate(new Date(id));
        let notice = await pool.query("SELECT * FROM notice_details WHERE expiry_dare=$1",[date])
        notice = notice.rows.map(i=>{
            i.expiry_dare = convertDate(new Date(i.expiry_dare));
            return i;
        })
        res.json(notice)
    }catch(err){
        console.log(err.message);
    }
})

app.listen(5000,()=>{
    console.log("server has started on port 5000");
});


const convertDate = (date)=>{
    let local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    local = local.toJSON().slice(0, 10);
    // console.log(local);

    return local;
}