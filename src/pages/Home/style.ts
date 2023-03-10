import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content =styled.div`
    max-width: 1440px;
    margin: 0 auto;
    
    padding: 1rem 5rem;

    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.1rem;
        color: var(--white);
        margin-top: 4.5rem;
    }

    .logo-loading{
        display: flex;
        justify-content: center;
        margin: 6rem 0;
    }
`;


export const FilterForm =styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.5rem 0 0 0;

    div{
        display: flex;
        flex-direction: column;
        width: 48%;

        label {
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3rem;
            color: var(--grey-300);
        }

        input, select {
            background: var(--dark-400);
            border-radius: 8px;
            margin-top: 8px;
            border: none;
            padding: 0.7rem 1.2rem;
            color: var(--white-600);
            font-size: 1rem;

            &::placeholder{
                color: var(--white-600);
            }
        }
    }

`;

export const TableContent = styled.table`
    width: 100%;
    background: var(--dark-400); 
    border-radius: 8px;
    margin-top: 2rem;
    padding: 1.6rem 3.5rem ;
    
    thead {
        th {
            text-align: initial;
            font-weight: 600;
            font-size: 0.7rem;
            line-height: 1.3rem;
            color: var(--grey-400);
        }
    }

    tbody {
        td {
            border-top: 1px solid rgba(161, 161, 170, 0.3);
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.6rem;
            color: #EDEDED;
            padding: 0.75rem 0;
        }
        button{
            background: #3E3E41;
            border-radius: 4px;
            font-weight: 600;
            font-size: 0.7rem;
            line-height: 1.3rem;
            color: var(--white);
            padding: 2px 6px;
            border: none;
        }
    }
`;