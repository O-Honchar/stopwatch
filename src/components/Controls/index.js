import s from './style.module.css';
import PropTypes from 'prop-types';
import timeParser from '../../functions/timeParser';

function Controls({ counter }) {
    const time = timeParser(counter);

    return (
        <>
            <div className={s.timer_wrapper}>
                <div className='hours'>{time.HH}</div>:
                <div className='minutes'>{time.MM}</div>:
                <div className='seconds'>{time.SS}</div>
            </div>
            <div className={s.btns_wrapper}>
                <button type='button' data-btn='start'>Start</button>
                <button type='button' data-btn='wait'>Wait</button>
                <button type='button' data-btn='stop'>Stop</button>
                <button type='button' data-btn='reset'>Reset</button>
            </div>            
        </>
    );
}

Controls.propTypes = {
    counter: PropTypes.number.isRequired
};

export default Controls;
