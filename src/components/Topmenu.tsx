import "url";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  ChevronLeft,
  ChevronDown,
  Share,
  Github,
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

const extractSegmentFromUrl = (urlString: string, segmentIndex: number) => {
  const parsedUrl = new URL(urlString);
  const pathname = parsedUrl.pathname; // URLのパス部分を取得
  const parts = pathname.split("/").filter((part) => part); // パスを "/" で分割し、空のセグメントを除去

  return parts.length > segmentIndex ? parts[segmentIndex] : null; // 指定されたセグメントを返す
};

const Githubpage = extractSegmentFromUrl(currentURL, 0);

export default function Topmenu() {
  return (
    <div className=" from-sky-500 via-sky-700 to-indigo-600 pb-0.5 bg-gradient-to-l">
      <div className="from-black to-zinc-700 bg-gradient-to-tr w-full h-full py-3 px-2 flex justify-between text-gray-300 font-mono">
        <div className=" border-gray-500 flex justify-center items-center relative text-gray-300 hover:text-gray-200 transition-all hover:translate-x-1">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-bold">
            <p className="text-xs font-light">So Tokumaru's Design</p>
            <p className="text-sm font-mono font-bold">Back To Design Home</p>
          </span>
          <a href="/" className="absolute w-full h-full top-0 left-0" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs font-light italic text-indigo-300 md:block hidden">
            /{Githubpage}
          </p>
        </div>
        <div className=" border-gray-500 flex relative">
          <NavigationMenu.Root>
            <NavigationMenu.List className=" p-1 rounded-lg flex gap-1">
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-300 hover:text-gray-200 hover:bg-zinc-600 focus:bg-zinc-900 select-none rounded-lg md:px-3 md:py-2 p-1.5 text-sm md:text-base font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] transition-all flex justify-center items-center"
                  href={`https://github.com/soumame/design/tree/main/src/pages/${Githubpage}`}
                >
                  <Github className="w-4 h-4 mr-1.5 flex justify-center" />
                  Code
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="text-gray-300 hover:text-gray-200 hover:bg-zinc-600 focus:bg-zinc-900 select-none rounded-lg md:px-3 md:py-2 p-1.5 text-sm md:text-base font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] transition-all flex justify-center items-center">
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
                          <p className="font-bold text-base">Copy </p>
                          <p className="font-light text-sm">
                            copy it to clipboard!
                          </p>
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
    </div>
  );
}
