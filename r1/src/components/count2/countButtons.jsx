

function CountButtons({plusFn, minusFn}) {
    return (
        <div className={'border-2 border-cyan-400 p-4'}>
            <button
                onClick={plusFn}
                className={'m-2 p-2 border-2'}>+</button>
            <button
                onClick={minusFn}
                className={'m-2 p-2 border-2'}>-</button>
        </div>
    );
}

export default CountButtons;