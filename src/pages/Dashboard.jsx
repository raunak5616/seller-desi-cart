import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const cardsData = [
    {
        title: "Orders",
        image: "orders",
        type: "adjective",
        description: "well meaning and kindly.",
        gradient: "linear-gradient(135deg, #22c55e 0%, #bbf7d0 100%)",
        textColor: "#064e3b",
    },
    {
        title: "Upload products",
        image: "box",
        type: "noun",
        description: "the quality of being reliable and steady.",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #bfdbfe 100%)",
        textColor: "#1e3a8a",
    },
    {
        title: "Manage Products",
        image: "data_table",
        type: "noun",
        description: "the ability to recover quickly from difficulties.",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ddd6fe 100%)",
        textColor: "#312e81",
    },
    {
        title: "Bills",
        image: "request_page",
        type: "noun",
        description: "the process of becoming larger or more extensive.",
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
    return (
        <div className="flex flex-wrap mt-50 justify-center gap-5">

            {cardsData.map((card, index) => (
                <Card
                    key={index}
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
                            <span class="material-symbols-outlined">
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
