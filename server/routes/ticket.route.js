const TicketController = require("../controllers/ticket.controller");
// const UserController = require("../controllers/user.controller");
module.exports = (app) => {
    app.get("/api/tickets", TicketController.getTickets);
    app.get("/api/tickets/:id", TicketController.getTicket);
    app.post("/api/tickets", TicketController.createTicket);
    app.delete("/api/tickets/:id", TicketController.deleteTicket);
    app.put("/api/tickets/:id", TicketController.updateTicket);
    // app.post("/api/login", UserController.Login);
    // app.post("/api/register", UserController.Register);
    // app.get("/api/tickets/type/:type", TicketContoller.getCourseByType);
};
