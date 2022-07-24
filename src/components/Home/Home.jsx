import '../Home/Home_style.css';
import {  useNavigate } from "react-router-dom";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Button from '@mui/material/Button';

function Home() {
    const navigate = useNavigate()

    return (
        <div
            className="startBtn"
        >
            <Button
                variant="text"
                onClick={() => {
                    navigate('/game');
                    console.log('CLICK START')
                }}
            >
                <PlayCircleOutlineIcon sx={{ color: '#ffafea', fontSize: 150 }} />
            </Button>
        </div>
    )
}
export default Home;
