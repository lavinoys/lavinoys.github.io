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
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: 5,
      vy: 5,
      radius: 10,
    };

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
  }, [canvasRef]);

  return <canvas ref={canvasRef} width="600" height="400" />;
};

export default BouncingBall;
