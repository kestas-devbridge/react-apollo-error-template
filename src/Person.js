import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const PERSON = gql`
    query GetPerson($id: String) {
        people(id: $id) {
            id
            name
        }
    }
`;

export default function Person() {
    const [personName, setPersonName] = useState('');
    const {
        loading,
        networkStatus,
        refetch,
    } = useQuery(PERSON, {
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
        skip: true,
    });

    const handleChange = (e) => {
        if (e.target.value) {
            refetch({ id: e.target.value }).then(res => {
                setPersonName(res.data.people.name);
            });
        }
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option>Select person</option>
                <option value="1">John Smith</option>
                <option value="2">Sara Smith</option>
                <option value="3">Budd Deey</option>
            </select>
            <p>{ networkStatus === 4 ? <span>Loading...</span> : <span>Person: { personName }</span> }</p>
        </div>
    );
}
