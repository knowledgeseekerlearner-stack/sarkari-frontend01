// components/PopupSettings.tsx
"use client";
import React, { useEffect, useState } from "react";

const OPTIONS = [
  { label: "Instant (0s)", value: "0" },
  { label: "0.3s", value: "300" },
  { label: "0.5s (Recommended)", value: "500" },
  { label: "1s", value: "1000" },
  { label: "Disable Hover Popup", value: "disable" },
];

export default function PopupSettings() {
  const [value, setValue] = useState<string>("500");

  useEffect(() => {
    const saved = localStorage.getItem("sj_popup_delay");
    if (saved) setValue(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("sj_popup_delay", value);
  }, [value]);

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">Popup Settings</h4>
      <p className="text-sm text-gray-500 mb-3">Control hover preview delay</p>

      <div className="space-y-2">
        {OPTIONS.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="popupDelay"
              value={opt.value}
              checked={value === opt.value}
              onChange={() => setValue(opt.value)}
              className="h-4 w-4"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3">Your preference saved on this device.</p>
    </div>
  );
}
