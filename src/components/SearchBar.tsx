import { useNavigate } from "react-router";
import { type ChangeEvent, type SubmitEvent, useState } from "react";
import styled from "styled-components";

type Props = { keyword?: string };

const Form = styled.form`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 12px;
    background-color: #ff5959;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

function SearchBar({ keyword }: Props) {
    const navigate = useNavigate();

    const [input, setInput] = useState(keyword);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
        setInput(event.target.value);

    const onSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        let k;
        if (typeof input === "string") {
            k = input.trim();
        }
        if (!k) return;
        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            <Input onChange={onChangeHandler} value={input} />
            <Button type={"submit"}>Search</Button>
        </Form>
    );
}

export default SearchBar;
