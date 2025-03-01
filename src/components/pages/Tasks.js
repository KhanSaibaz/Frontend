import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./header.scss";
import CommonBtn from '../constants/CommonBtn';
import Table from "./Table";
import { toast, ToastContainer } from 'react-toastify';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": { padding: theme.spacing(2) },
    "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

const Task = () => {
    const [open, setOpen] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [fromTime, setFromTime] = useState("");
    const [toTime, setToTime] = useState("");
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTaskList(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskList));
    }, [taskList]);

    const handleSubmit = () => {
        if (!taskName || !fromDate || !toDate || !fromTime || !toTime) {
            toast.error("Please fill all fields.");
            return;
        }


        if (fromDate === toDate) {
            const fromTimeObj = new Date(`1970-01-01T${fromTime}`);
            const toTimeObj = new Date(`1970-01-01T${toTime}`);
    
            if (toTimeObj <= fromTimeObj) {
                toast.info("To Time must be greater than From Time.");
                return;
            }

        }
        const newTask = { taskName, fromDate, toDate, fromTime, toTime };
        setTaskList([...taskList, newTask]);

        setOpen(false);
        setTaskName("");
        setFromDate("");
        setToDate("");
        setFromTime("");
        setToTime("");
    };

    return (
        <>
            <div className='main-header'>
                <CommonBtn title="Add Task" width="100px" height="50px" onClick={() => setOpen(true)} sx={{ padding: "10px", backgroundColor: '#1976D2', color: '#fff' }} />
            </div>

            <BootstrapDialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle sx={{ m: 0, p: 2 }}>Add Task</DialogTitle>
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{ position: "absolute", right: 8, top: 8, color: "grey.500" }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>Task Name</Typography>
                    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} style={{ width: '400px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />

                    <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>From Date</Typography>
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ width: '400px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
                    
                    <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>To Date</Typography>
                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ width: '400px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    
                    <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>From Time</Typography>
                    <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} style={{ width: '400px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
                    
                    <Typography sx={{ marginTop: '10px', fontSize: '14px' }}>To Time</Typography>
                    <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} style={{ width: '400px', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </DialogContent>
                <DialogActions>
                    <CommonBtn title="Submit Task" width="100px" height="40px" onClick={handleSubmit} sx={{ padding: "10px", backgroundColor: '#1976D2', color: '#fff' }} />
                </DialogActions>
            </BootstrapDialog>

            <div className="table-content">
                <Table data={taskList} />
            </div>
            <ToastContainer />
        </>
    );
};

export default Task;
