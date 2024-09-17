import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {

    const [view, setView] = useState([]);

    useEffect(() => {
        fetch("https://66a89d9ae40d3aa6ff58ae79.mockapi.io/SNS")
            .then((res) => { return res.json(); })
            .then((data) => { setView(data) })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
