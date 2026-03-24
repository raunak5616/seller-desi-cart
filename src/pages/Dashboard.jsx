import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const cardsData = [
    {
        title: "Live Orders",
        image: "orders",
        route: "/orders",
        description: "Track live customer orders.",
        gradient: "linear-gradient(135deg, #22c55e 0%, #bbf7d0 100%)",
        textColor: "#064e3b",
    },
    {
        title: "Upload Products",
        image: "box",
        route: "/upload-products",
        description: "Add new products to your store.",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #bfdbfe 100%)",
        textColor: "#1e3a8a",
    },
    {
        title: "Manage Products",
        image: "data_table",
        route: "/manage-products",
        description: "Edit or remove existing products.",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ddd6fe 100%)",
        textColor: "#312e81",
    },
    {
        title: "Bills",
        image: "request_page",
        route: "/bills",
        description: "View invoices and payments.",
        gradient: "linear-gradient(135deg, #06b6d4 0%, #93c5fd 100%)",
        textColor: "#0f172a",
    },
];


const Bull = () => (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap mt-50 justify-center gap-5">

            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    onClick={() => navigate(card.route)}
                    sx={{
                        minWidth: 275,
                        background: card.gradient,
                        color: card.textColor,
                        borderRadius: 3,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                        transition: "all 0.35s ease",
                        cursor: "pointer",

                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 18px 45px rgba(0,0,0,0.2)",
                        },
                    }}
                >

                    <CardContent>
                        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                            <span className="material-symbols-outlined">
                                {card.image}
                            </span>
                        </Typography>
                        <Typography variant="h5">
                            {card.title}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                            {card.type}
                        </Typography>
                        <Typography variant="body2">
                            {card.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Dashboard;
