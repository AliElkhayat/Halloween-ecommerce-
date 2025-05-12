import { useState, useEffect } from "react";
import { Skull, X as XIcon, RefreshCw, Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

// Define the game board type
type Board = Array<string | null>;
type Winner = {
  player: string | null;
  combo: number[] | null;
};

const GamePage = () => {
  const { toast } = useToast();
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isSkullNext, setIsSkullNext] = useState(true);
  const [winner, setWinner] = useState<Winner>({ player: null, combo: null });
  const [gameHistory, setGameHistory] = useState<{ skull: number; sternum: number }>({
    skull: 0,
    sternum: 0,
  });

  // Winning combinations
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]             // Diagonal
  ];

  // Check if there's a winner
  const checkWinner = (currentBoard: Board): Winner => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { player: currentBoard[a], combo };
      }
    }
    
    // Check for draw
    if (!currentBoard.includes(null)) {
      return { player: "draw", combo: null };
    }
    
    return { player: null, combo: null };
  };

  // Handle square click
  const handleClick = (index: number) => {
    if (board[index] || winner.player) return;
    
    const newBoard = [...board];
    newBoard[index] = isSkullNext ? "skull" : "sternum";
    setBoard(newBoard);
    setIsSkullNext(!isSkullNext);
    
    const result = checkWinner(newBoard);
    if (result.player) {
      setWinner(result);
      
      if (result.player === "skull") {
        setGameHistory(prev => ({ ...prev, skull: prev.skull + 1 }));
        toast({
          title: "Skull Wins!",
          description: "The skulls have claimed victory!",
        });
        triggerConfetti();
      } else if (result.player === "sternum") {
        setGameHistory(prev => ({ ...prev, sternum: prev.sternum + 1 }));
        toast({
          title: "Sternum Wins!",
          description: "The cross bones are victorious!",
        });
        triggerConfetti();
      } else {
        toast({
          title: "It's a Draw!",
          description: "No winner this time...",
        });
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsSkullNext(true);
    setWinner({ player: null, combo: null });
  };

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#9b87f5', '#D946EF', '#F97316']
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const renderSquare = (index: number) => {
    const isWinningSquare = winner.combo?.includes(index);
    
    return (
      <button
        className={`w-full h-full aspect-square border-2 border-halloween-purple dark:border-halloween-purple/70 flex items-center justify-center rounded-md transition-all ${
          isWinningSquare ? 'bg-halloween-purple/30 animate-pulse' : 'hover:bg-halloween-purple/10'
        }`}
        onClick={() => handleClick(index)}
        disabled={!!board[index] || !!winner.player}
      >
        {board[index] === "skull" && (
          <Skull className="w-12 h-12 text-halloween-purple animate-fade-in" />
        )}
        {board[index] === "sternum" && (
          <div className="relative w-10 h-10 animate-fade-in">
            <XIcon className="w-10 h-10 text-halloween-pink absolute rotate-45" />
            <XIcon className="w-10 h-10 text-halloween-pink absolute -rotate-45" />
          </div>
        )}
      </button>
    );
  };

  useEffect(() => {
    // Add initial welcome toast
    toast({
      title: "Welcome to Skull & Bones!",
      description: "A Halloween twist on the classic Tic-Tac-Toe game",
    });
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-2">
            <Skull className="h-8 w-8 text-halloween-purple mr-2" />
            <h1 className="font-creepster text-4xl md:text-5xl">Skull & Bones</h1>
            <div className="relative w-6 h-6 ml-2">
              <XIcon className="w-6 h-6 text-halloween-pink absolute rotate-45" />
              <XIcon className="w-6 h-6 text-halloween-pink absolute -rotate-45" />
            </div>
          </div>
          <p className="text-muted-foreground">
            A spooky twist on the classic game of Tic-Tac-Toe
          </p>
        </div>

        <div className="grid grid-cols-2 mb-6 gap-4">
          <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
            isSkullNext && !winner.player ? 'bg-halloween-purple/10 border-2 border-halloween-purple animate-pulse' : 'bg-card'
          }`}>
            <Skull className="w-6 h-6 text-halloween-purple" />
            <div>
              <h3 className="font-creepster text-lg">Skull</h3>
              <p className="text-sm">Wins: {gameHistory.skull}</p>
            </div>
          </div>
          
          <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
            !isSkullNext && !winner.player ? 'bg-halloween-pink/10 border-2 border-halloween-pink animate-pulse' : 'bg-card'
          }`}>
            <div className="relative w-5 h-5">
              <XIcon className="w-5 h-5 text-halloween-pink absolute rotate-45" />
              <XIcon className="w-5 h-5 text-halloween-pink absolute -rotate-45" />
            </div>
            <div>
              <h3 className="font-creepster text-lg">Sternum</h3>
              <p className="text-sm">Wins: {gameHistory.sternum}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-3 gap-4 aspect-square">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => renderSquare(index))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Button onClick={resetGame} variant="outline" className="flex items-center">
            <RefreshCw className="w-4 h-4 mr-2" />
            New Game
          </Button>
        </div>

        {winner.player && (
          <div className={`text-center p-6 rounded-lg animate-fade-in ${
            winner.player === "skull" 
              ? "bg-halloween-purple/20"
              : winner.player === "sternum"
                ? "bg-halloween-pink/20"
                : "bg-muted"
          }`}>
            <h2 className="font-creepster text-2xl mb-2">
              {winner.player === "draw" 
                ? "It's a Draw!" 
                : `${winner.player === "skull" ? "Skull" : "Sternum"} Wins!`}
            </h2>
            <p className="text-muted-foreground">
              {winner.player === "draw" 
                ? "Neither player could claim victory this time." 
                : `The ${winner.player === "skull" ? "skulls have" : "sternums have"} claimed victory!`}
            </p>
          </div>
        )}

        <div className="mt-12 bg-card rounded-lg p-6 shadow-md">
          <h2 className="font-creepster text-2xl mb-4">How to Play</h2>
          <div className="space-y-3">
            <p>Players take turns marking spaces on a 3×3 grid.</p>
            <p>The <strong className="text-halloween-purple">Skull (☠)</strong> player goes first, followed by the <strong className="text-halloween-pink">Sternum (✕)</strong> player.</p>
            <p>The first player to get three of their marks in a row (horizontal, vertical, or diagonal) wins the game.</p>
            <p>If all spaces are filled and no player has three in a row, the game ends in a draw.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
