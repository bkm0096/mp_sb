

function ForEx() {

    const arr = [
        {no: 1, name: 'AAA', price: 3000},
        {no: 2, name: 'BAA', price: 4000},
        {no: 3, name: 'CAA', price: 5000},
        {no: 4, name: 'DAA', price: 3500},
    ]

    return (
        <div>
            <ul>
                {arr.map( m => <li key={m.no}>{m.name} --- {m.price}</li>)}
            </ul>

            <ul>
                {arr.map( ({no,name,price}) =>
                    <li key={no}>
                        {name} --- {price}
                    </li>)}
            </ul>

            <ul>
                {arr.map( (m, idx) => <li key={idx}>{m.name} --- {m.price}</li>)}
            </ul>
        </div>
    );
}

export default ForEx;