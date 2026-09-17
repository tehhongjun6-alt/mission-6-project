import { Button, Card, Col, Container, Row } from "react-bootstrap";
import devices from "../data/device.json";
import { useState } from "react";

export default function Dashboard() {
    const [selectedStatus, setSelectedStatus] = useState("All");
    const filteredDevices = devices.filter((device) => {
        if (selectedStatus === "All") {
            return true;
        }
        return device.status === selectedStatus;
    });
    return (
        <main className="dashboard-page">
            <Container className="py-4">
                <div className="dashboard-brand">
                    <img src="/logo.jpg" alt="DeviceNest Logo" style={{ maxWidth: "40px" }} />
                    <strong>DeviceNest</strong>
                </div>

                <p className="subtitle">Check the connection status of your devices.</p>
                <div className="d-flex gap-2 mb-4">
                    <Button
                        className={
                            selectedStatus === "All"
                                ? "filter-btn filter-btn-active"
                                : "filter-btn"
                        }
                        onClick={() => setSelectedStatus("All")}
                    >
                        All
                    </Button>

                    <Button
                        className={
                            selectedStatus === "Online"
                                ? "filter-btn filter-btn-active"
                                : "filter-btn"
                        }
                        onClick={() => setSelectedStatus("Online")}
                    >
                        Online
                    </Button>

                    <Button
                        className={
                            selectedStatus === "Offline"
                                ? "filter-btn filter-btn-active"
                                : "filter-btn"
                        }
                        onClick={() => setSelectedStatus("Offline")}
                    >
                        Offline
                    </Button>
                </div>
                {filteredDevices.length === 0 ? (
                    <p className="empty-state">
                        No {selectedStatus} devices found
                    </p>
                ) : (
                    <Row className="g-4">
                        {filteredDevices.map((device) => {
                            const isOnline = device.status === "Online";

                            return (
                                <Col key={device.id} sm={12} md={6} lg={4}>
                                    <div className="device-card h-100">
                                        <Card className="h-100">
                                            <Card.Img
                                                variant="top"
                                                src={device.image}
                                                alt={device.name}
                                                loading="lazy"
                                                style={{
                                                    height: "250px",
                                                    objectFit: "cover",
                                                }}
                                            />

                                            <Card.Body>
                                                <Card.Title><strong>{device.name}</strong></Card.Title>

                                                <p className="device-location">
                                                    Location: {device.location}
                                                </p>

                                                <p className="device-last-seen">
                                                    Last Seen: {device.lastSeen}
                                                </p>

                                                <span
                                                    className={
                                                        isOnline
                                                            ? "status-badge status-online"
                                                            : "status-badge status-offline"
                                                    }
                                                >
                                                    {device.status}
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Container>
        </main>
    );
}
