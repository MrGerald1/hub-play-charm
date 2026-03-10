import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Join = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState(code || "");

  const handleJoin = () => {
    if (name && roomCode.length >= 4) {
      localStorage.setItem("playhub_guest_name", name);
      navigate(`/room/${roomCode}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
        <div className="text-5xl mb-4">🎮</div>
        <h1 className="font-display font-bold text-2xl text-foreground">Join a Room</h1>
        <p className="text-muted-foreground text-sm">Enter your name and room code</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-full max-w-xs space-y-4">
        <Input
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-center text-lg bg-muted border-border font-display"
          maxLength={20}
        />
        {!code && (
          <Input
            placeholder="Room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            className="text-center text-2xl font-display font-bold tracking-[0.3em] uppercase bg-muted border-border"
            maxLength={6}
          />
        )}
        <Button
          onClick={handleJoin}
          disabled={!name || roomCode.length < 4}
          className="w-full bg-gradient-primary text-primary-foreground font-display font-bold text-base h-12"
        >
          Join Game
        </Button>
      </motion.div>
    </div>
  );
};

export default Join;
