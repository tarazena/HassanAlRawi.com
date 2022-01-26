import {
  CanvasHTMLAttributes,
  DetailedHTMLProps,
  FC,
  useEffect,
  useRef,
} from "react";

interface ICanvas {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
  additionalProps?: DetailedHTMLProps<
    CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  >;
}

export const Canvas: FC<ICanvas> = ({ draw, additionalProps }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      !!context && draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...additionalProps} />;
};

/* /* <Canvas
        draw={(ctx, frameCount) => {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.fillStyle = colors.AthensGray;
          const shadow = NeomorphColorVariant["AthensGray"]();
          ctx.shadowColor = shadow.right;
          ctx.shadowBlur = 3;
          ctx.shadowOffsetX = -3;
          ctx.shadowOffsetY = -3;
          ctx.beginPath();
          ctx.arc(
            50 + frameCount > 250 ? 50 : frameCount,
            100,
            50,
            0,
            2 * Math.PI
          );
          ctx.fill();
        }}
        additionalProps={{
          style: {
            position: "absolute",
            left: 100,
            right: 100,
          },
          width: 500,
          height: 500,
        }}
      /> */
/* <Canvas
        draw={(ctx, frameCount) => {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.fillStyle = colors.AthensGray;
          const shadow = NeomorphColorVariant["AthensGray"]();
          ctx.shadowColor = shadow.left;
          ctx.shadowBlur = 3;
          ctx.shadowOffsetX = 3;
          ctx.shadowOffsetY = 3;
          ctx.beginPath();
          ctx.arc(
            50 + frameCount > 250 ? 50 : frameCount,
            100,
            50,
            0,
            2 * Math.PI
          );
          ctx.fill();
        }}
        additionalProps={{
          style: {
            position: "absolute",
            left: 100,
            right: 100,
          },
          width: 500,
          height: 500,
        }}
      /> */
