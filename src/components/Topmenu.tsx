import React from "react";
import ReactDOM from "react-dom";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  ChevronLeft,
  Share,
  Brush,
  Twitter,
  ClipboardList,
  Facebook,
} from "lucide-react";

const isBrowser = typeof window !== "undefined";

const currentURL = isBrowser ? window.location.href : "";

export const urlCopyHandler = async (url: string) => {
  if (!isBrowser) return;

  try {
    await navigator.clipboard.writeText(url);
    console.log("URLのコピーに成功しました");
  } catch {
    console.error("URLのコピーに失敗しました");
  }
};

export default function Topmenu() {
  return (
    <div className="bg-black w-full py-3 px-2 border-b flex justify-between text-gray-300 ">
      <div className=" border-gray-500 flex relative text-gray-300 hover:text-gray-200 transition-all hover:translate-x-1">
        <ChevronLeft className="w-5 h-5" />
        <span className="text-base font-bold">
          <p className="text-xs font-light">So Tokumaru's Design</p>
          <p className="text-sm font-mono font-bold">Back To Design Home</p>
        </span>
        <a href="/" className="absolute w-full h-full top-0 left-0" />
      </div>
      <div className=" border-gray-500 flex relative">
        <NavigationMenu.Root>
          <NavigationMenu.List className=" p-1 rounded-lg flex gap-1">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-gray-300 hover:bg-zinc-600 focus:bg-zinc-900 select-none rounded-lg px-3 py-2 text-base font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] transition-all flex justify-center items-center"
                href="https://github.com/radix-ui"
              >
                <Brush className="w-4 h-4 mr-1.5 flex justify-center" />
                Example
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-gray-300 hover:bg-zinc-600 focus:bg-zinc-900 select-none rounded-lg px-3 py-2 text-base font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] transition-all flex justify-center items-center">
                <Share
                  className="w-4 h-4 mr-1.5 flex justify-center"
                  aria-hidden
                />
                Share
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-10 left-0 w-full bg-zinc-800 rounded-lg shadow">
                <ul className="p-2">
                  <li className="flex items-center hover:bg-gray-600 p-3 rounded-lg relative border-2 border-zinc-800 hover:border-sky-500 transition-all">
                    <span className="flex">
                      <Twitter className="p-1 mr-2 w-6 h-6" />
                      <span>
                        <p className="font-bold text-base">Twitter</p>
                        <p className="font-light text-sm">
                          Post on X (Twitter)
                        </p>
                      </span>
                    </span>
                    <a
                      className="absolute top-0 left-0 w-full h-full"
                      href={`https://twitter.com/intent/tweet?url=${currentURL}&text=See this web design!&hashtags=Design,Web,sonicedesign&related=@so_to9`}
                    />
                  </li>
                  <li className="flex items-center hover:bg-gray-600 p-3 rounded-lg relative border-2 border-zinc-800 hover:border-blue-500 transition-all">
                    <span className="flex">
                      <Facebook className="p-1 mr-2 w-6 h-6" />
                      <span>
                        <p className="font-bold text-base">Facebook</p>
                        <p className="font-light text-sm">Post on Facebook</p>
                      </span>
                    </span>
                    <a
                      className="absolute top-0 left-0 w-full h-full"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
                    />
                  </li>
                  <li className="flex items-center hover:bg-gray-600 p-3 rounded-lg relative border-2 border-zinc-800 hover:border-yellow-500 transition-all">
                    <span className="flex">
                      <ClipboardList className="p-1 mr-2 w-6 h-6" />
                      <span>
                        <p className="font-bold text-base">Copy to Clipboard</p>
                        <p className="font-light text-sm">Copy...</p>
                      </span>
                    </span>
                    <button
                      className="w-full h-full absolute top-0 left-0"
                      type="button"
                      onClick={() => urlCopyHandler(currentURL)}
                    />
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  );
}
