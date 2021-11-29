import s from './style.module.css';

function Controls({ hours, minutes, seconds }) {
    return (
        <>
            <div className={s.timer_wrapper}>
                <div className='hours'>{hours='00'}</div>:
                <div className='minutes'>{minutes='00'}</div>:
                <div className='seconds'>{seconds='00'}</div>
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

export default Controls;
