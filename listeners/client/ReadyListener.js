"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        this.client.user.setPresence({
            status: "idle",
            activity: {
                name: "Shindo Life With The Akatsuki https://discord.gg/x7sXm35B2a",
                type: "PLAYING"
            }
        });
        console.log(`${this.client.user.tag} is now online`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L1JlYWR5TGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBMEM7QUFJMUMsTUFBcUIsYUFBYyxTQUFRLHlCQUFRO0lBQy9DO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLElBQUk7UUFHUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekIsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLDZEQUE2RDtnQkFDbkUsSUFBSSxFQUFFLFNBQVM7YUFDbEI7U0FFSixDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO0lBR3pELENBQUM7Q0FDSjtBQXpCRCxnQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBUZXh0Q2hhbm5lbCwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlMaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInJlYWR5XCIsIHtcclxuICAgICAgICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgICAgICAgZXZlbnQ6IFwicmVhZHlcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY2xpZW50XCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKCk6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jbGllbnQudXNlci5zZXRQcmVzZW5jZSh7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNoaW5kbyBMaWZlIFdpdGggVGhlIEFrYXRzdWtpIGh0dHBzOi8vZGlzY29yZC5nZy94N3NYbTM1QjJhXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBMQVlJTkdcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xpZW50LnVzZXIudGFnfSBpcyBub3cgb25saW5lYCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19