import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../../styles/calendar.module.scss';
import NotificationManager from "react-notifications/lib/NotificationManager";

const Calendar = () => {
    const [mon, setMon] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            console.log(+event.target.value)
            return setMon((prevState) => ({...prevState, [activity]: +event.target.value}))
        },
        day: 'Mon',
        id: 1,
    });
    const [tue, setTue] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            return setTue((prevState) => ({...prevState, [activity]: +event.target.value}))
        },        
        day: 'Tue',
        id: 2,
    });
    const [wed, setWed] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            return setWed((prevState) => ({...prevState, [activity]: +event.target.value}))
        },
        day: 'Wed',
        id: 3,
    });
    const [thu, setThu] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            return setThu((prevState) => ({...prevState, [activity]: +event.target.value}))
        },
        day: 'Thu',
        id: 4,
    });
    const [fri, setFri] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            return setFri((prevState) => ({...prevState, [activity]: +event.target.value}))
        },
        day: 'Fri',
        id: 5,
    });
    const [sat, setSat] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            return setSat((prevState) => ({...prevState, [activity]: +event.target.value}))
        },
        day: 'Sat',
        id: 6,
    });
    const [sun, setSun] = useState({
        health: '',
        progress: '',
        travels: '',
        hobby: '',
        friends: '',
        family: '',
        carrier: '',
        setValue: (event, activity) => {
            return setSun((prevState) => ({...prevState, [activity]: +event.target.value}))
        },
        day: 'Sun',
        id: 7
    });
    const [arrayDays, setArrayDays] = useState([mon, tue, wed, thu, fri, sat, sun]);
    const submitValue = (event, dayObj) => {
        event.preventDefault();
        const dayValues = Object.values(dayObj);
        const isCorrectValue = dayValues.every(item => item > 0);
        if(isCorrectValue) {
            console.log(isCorrectValue);
            return console.log(dayObj)
        }
        NotificationManager.error('You should type only positive numbers :)')
    };
    return(
        <section className={styles.calendarPage}>
            <div className={styles.calendar}>
            {arrayDays.map(item => {
                return(
                    <div key={item.id} className={styles.column}>
                    <h3 className={styles.title}>{item.day}</h3>
                    <form onSubmit={event => submitValue(event, item)}>
                    <TextField value={item.health} onChange={event => item.setValue(event, 'health')} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={item.progress} onChange={event => item.setValue(event, "progress")} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={item.travels} onChange={event => item.setValue(event, "travels")} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={item.hobby} onChange={event => item.setValue(event, "hobby")} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={item.friends} onChange={event => item.setValue(event, "friends")} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={item.family} onChange={event => item.setValue(event, "family")} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={item.carrier} onChange={event => item.setValue(event, "carrier")} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                );
            })}
            {/* <div className={styles.column}>
                    <h3 className={styles.title}>Mon</h3>
                    <form onSubmit={event => submitValue(event, mon)}>
                    <TextField value={mon.health} onChange={event => setMon(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={mon.progress} onChange={event => setMon(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={mon.travels} onChange={event => setMon(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={mon.hobby} onChange={event => setMon(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={mon.friends} onChange={event => setMon(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={mon.family} onChange={event => setMon(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={mon.carrier} onChange={event => setMon(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Tue</h3>
                    <form onSubmit={event => submitValue(event, tue)}>
                    <TextField value={tue.health} onChange={event => setTue(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={tue.progress} onChange={event => setTue(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={tue.travels} onChange={event => setTue(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={tue.hobby} onChange={event => setTue(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={tue.friends} onChange={event => setTue(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={tue.family} onChange={event => setTue(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={tue.carrier} onChange={event => setTue(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Wed</h3>
                    <form onSubmit={event => submitValue(event, wed)}>
                    <TextField value={wed.health} onChange={event => setWed(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={wed.progress} onChange={event => setWed(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={wed.travels} onChange={event => setWed(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={wed.hobby} onChange={event => setWed(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={wed.friends} onChange={event => setWed(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={wed.family} onChange={event => setWed(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={wed.carrier} onChange={event => setWed(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Thu</h3>
                    <form onSubmit={event => submitValue(event, thu)}>
                    <TextField value={thu.health} onChange={event => setThu(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={thu.progress} onChange={event => setThu(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={thu.travels} onChange={event => setThu(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={thu.hobby} onChange={event => setThu(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={thu.friends} onChange={event => setThu(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={thu.family} onChange={event => setThu(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={thu.carrier} onChange={event => setThu(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Fri</h3>
                    <form onSubmit={event => submitValue(event, fri)}>
                    <TextField value={fri.health} onChange={event => setFri(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={fri.progress} onChange={event => setFri(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={fri.travels} onChange={event => setFri(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={fri.hobby} onChange={event => setFri(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={fri.friends} onChange={event => setFri(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={fri.family} onChange={event => setFri(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={fri.carrier} onChange={event => setFri(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Sat</h3>
                    <form onSubmit={event => submitValue(event, sat)}>
                    <TextField value={sat.health} onChange={event => setSat(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={sat.progress} onChange={event => setSat(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={sat.travels} onChange={event => setSat(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={sat.hobby} onChange={event => setSat(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={sat.friends} onChange={event => setSat(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={sat.family} onChange={event => setSat(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={sat.carrier} onChange={event => setSat(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Sun</h3>
                    <form onSubmit={event => submitValue(event, sun)}>
                    <TextField value={sun.health} onChange={event => setSun(prevState => ({...prevState, health: +event.target.value}))} margin='dense' name="health" fullWidth variant="outlined" label="health" type="number"/>
                    <TextField value={sun.progress} onChange={event => setSun(prevState => ({...prevState, progress: +event.target.value}))} margin='dense' name="progress" fullWidth variant="outlined" label="progress" type="number"/>
                    <TextField value={sun.travels} onChange={event => setSun(prevState => ({...prevState, travels: +event.target.value}))} margin='dense' name="travels" fullWidth variant="outlined" label="travels" type="number"/>
                    <TextField value={sun.hobby} onChange={event => setSun(prevState => ({...prevState, hobby: +event.target.value}))} margin='dense' name="hobby" fullWidth variant="outlined" label="hobby" type="number"/>
                    <TextField value={sun.friends} onChange={event => setSun(prevState => ({...prevState, friends: +event.target.value}))} margin='dense' name="friends" fullWidth variant="outlined" label="friends" type="number"/>
                    <TextField value={sun.family} onChange={event => setSun(prevState => ({...prevState, family: +event.target.value}))} margin='dense' name="family" fullWidth variant="outlined" label="family" type="number"/>
                    <TextField value={sun.carrier} onChange={event => setSun(prevState => ({...prevState, carrier: +event.target.value}))} margin='dense' name="carrier" fullWidth variant="outlined" label="carrier" type="number"/>
                    <Button type="submit" className={styles.submitButton} color="secondary" variant="outlined">Save</Button>
                    </form>
                </div> */}
            </div>
            <Button className={styles.button} color="secondary" type="text" variant="contained">Generate result</Button>
        </section>
    );
};

export default Calendar;