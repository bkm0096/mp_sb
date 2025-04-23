
interface CountDisplayProps{
    countObj: Count
}


function CountDisplay({countObj} : CountDisplayProps) {
    return (
        <div className={'text-5xl'}>
            NUMBER: {countObj.num}
        </div>
    );
}

export default CountDisplay;