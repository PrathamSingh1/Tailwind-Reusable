import React from "react";

export default function Test() {
  return (
    <div>
      <button className="relative px-6 py-2 text-sm text-gray-700 bg-neutral-300 hover:text-black transition-colors">
        {/* Top-left corner */}
        <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gray-400"></span>
        {/* Top-right corner */}
        <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gray-400"></span>
        {/* Bottom-left corner */}
        <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gray-400"></span>
        {/* Bottom-right corner */}
        <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gray-400"></span>
        Follow
      </button>
    </div>
  );
}
