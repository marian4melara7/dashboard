import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router";

export function Dashboard() {
    const { isLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate("/");
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bem-vindo ao dashboard! Aqui você pode acessar as principais funcionalidades do sistema.</p>
        </div>
    );
}