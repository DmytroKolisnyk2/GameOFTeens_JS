import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../../styles/calendar.module.scss';

const Calendar = () => {
    const [days, setDays] = useState([{day: 'Mon', id: 1}, {day: 'Tue', id: 2}, {day: 'Wed', id: 3}, {day: 'Thu', id: 4}, {day: 'Fri', id: 5}, {day: 'Sat', id: 6}, {day: 'Sun', id: 7}]);
    const [activities, setActivities] = useState([{activity: 'health', id: 8}, {activity: 'progress', id: 9}, {activity: 'travels', id: 10}, {activity: 'hobby', id: 11}, {activity: 'friends', id: 12}, {activity: 'family', id: 13}, {activity: 'carrier', id: 14}]);
    const [health, setHealth] = useState('');
    const [progress, setProgress] = useState('');
    const [travels, setTravels] = useState('');
    const [hobby, setHobby] = useState('');
    const [friends, setFriends] = useState('');
    const [family, setFamily] = useState('');
    const [carrier, setCarrier] = useState('');
    return(
        <main className={styles.calendarPage}>
            <section className={styles.calendar}>
            {days.map(itemDay => {
                return(
                    <div key={itemDay.id} className={styles.column}>
                    <h3 className={styles.title}>{itemDay.day}</h3>
                    {activities.map(item => {
                        return(
                            <TextField margin='dense' name={item.activity} key={item.id} fullWidth variant="outlined" label={item.activity} type="text"/>
                        );
                    })}
                </div>
                );
            })}
            </section>
            <Button className={styles.button} color="secondary" type="text" variant="contained">Generate result</Button>
        </main>
    );
};

export default Calendar;