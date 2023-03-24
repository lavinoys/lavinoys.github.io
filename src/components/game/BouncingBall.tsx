import React, { useEffect, useRef } from 'react';

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const BouncingBall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;

    const ball: Ball = {
      x: Math.min(window.innerWidth, 600) / 2,
      y: Math.min(window.innerHeight, 500) / 2,
      vx: 5,
      vy: 5,
      radius: 10,
    };

    const setCanvasSize = () => {
      canvas.width = Math.min(window.innerWidth, 600);
      canvas.height = Math.min(window.innerHeight, 500);
    };

    setCanvasSize();

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
    };

    const updateBallPosition = () => {
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Collision detection with canvas walls
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.vx = -ball.vx;
      }
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.vy = -ball.vy;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBall();

      updateBallPosition();

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default BouncingBall;
