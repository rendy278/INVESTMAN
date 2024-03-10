"use client";
import React, { useState, useId, useRef } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
// import AppScreen from "./AppScreen";
import clsx from "clsx";
import Appscreen from "./Appscreen";
const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
];
const maxPrices = Math.max(...prices);
const minPrices = Math.min(...prices);
const Chart = ({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) => {
  let width = totalWidth - paddingX * 2;
  let height = totalHeight - paddingY * 2;

  let id = useId();
  let svgRef = useRef();
  let pathRef = useRef();
  let isInView = useInView(svgRef, { amount: 0.5, once: true });
  let pathWidth = useMotionValue(0);
  let [interactionEnabled, setInteractionEnabled] = useState(false);

  let path = "";
  let points = [];

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width;
    let y =
      paddingY +
      (1 - (prices[index] - minPrices) / (maxPrices - minPrices)) * height;
    points.push({ x, y });
    path += `${index === 0 ? "M" : "L"} ${x.toFixed(4)} ${y.toFixed(4)}`;
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, "overflow-visible")}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX;
              let closestPointIndex;
              let closestDistance = Infinity;
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex];
                let distance = Math.abs(point.x - x);
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestPointIndex = pointIndex;
                } else {
                  break;
                }
              }
              onChangeActivePointIndex(closestPointIndex);
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: "#3b82f6", animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          );
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  );
};
const Appfeature = () => {
  let [activePointIndex, setActivePointIndex] = useState(null);
  let activePriceIndex = activePointIndex ?? prices.length - 1;
  let activeValue = prices[activePriceIndex];
  let previousValue = prices[activePriceIndex - 1];
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100;
  return (
    <Appscreen>
      <Appscreen.Body>
        <div className="p-4">
          <div className="flex gap-x-2 items-center">
            <div className="text-xs leading-61 text-gray-500">
              INVESTMAN Labs, Inc.
            </div>
            <div className="text-sm text-gray-800 ">100.00 $USD</div>
            <svg
              viewBox="0 0 24 24"
              className="ml-auto h-6 w-6 cursor-pointer"
              fill="none"
            >
              <path
                d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-3 border-t border-gray-300 pt-5">
            <div className="flex items-baseline text-gray-700 gap-1">
              <div className="text-2xl tabular-nums tracking-tight ">
                {activeValue.toFixed(2)}
              </div>
              <div className="text-sm">$USD</div>
              {percentageChange && (
                <div
                  className={clsx(
                    "ml-auto text-sm tabular-nums tracking-tight",
                    percentageChange >= 0 ? "text-blue-500" : "text-red-500"
                  )}
                >{`${
                  percentageChange > 0 ? "+" : ""
                } ${percentageChange.toFixed(2)}%`}</div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-gray-500">
              <p>1D</p>
              <p>5D</p>
              <p className="font-semibold text-blue-600">1M</p>
              <p>6M</p>
              <p>1Y</p>
              <p>5Y</p>
            </div>
            <div className="mt-3 rounded-lg bg-gray-100 ring-2 ring-inset ring-black/10">
              <Chart
                width={286}
                height={208}
                paddingX={3}
                paddingY={20}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white">
              Trade
            </button>
            <div className="flex justify-between py-1 mt-3">
              <div className="text-gray-500">Open</div>
              <div className="font-medium text-gray-700">6,387.55</div>
            </div>
            <div className="flex justify-between py-1">
              <div className="text-gray-500">Closed</div>
              <div className="font-medium text-gray-700">6,487.09</div>
            </div>
            <div className="flex justify-between py-1">
              <div className="text-gray-500">Low</div>
              <div className="font-medium text-gray-700">6,322.01</div>
            </div>
          </div>
        </div>
      </Appscreen.Body>
    </Appscreen>
  );
};

export default Appfeature;
