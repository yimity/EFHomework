import { Console, Hook, Unhook } from 'console-feed';
import { useEffect, useState } from 'react';
import {Button} from "react-bootstrap";
import {Empty} from "./Empty";

const LogsContainer = () => {
  const [logs, setLogs] = useState([]);

  // run once!
  useEffect(() => {
    Hook(
      window.console,
      (log) => {
        if (log.method === 'clear') {
          setLogs([]);
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          setLogs((currLogs) => [...currLogs, log]);
        }
        return;
      },
      false
    );
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      Unhook(window.console);
    };
  }, []);

  return (
    <div className="border p-2 mt-2 border-solid border-slate-400 flex flex-col">
      <div className="text-right">
        <Button
          variant="primary"
          className="relative -top-14"
          onClick={() => {
            // eslint-disable-next-line
            console.clear();
          }}
        >
          Clear
        </Button>
      </div>
      <div className="overflow-auto -mt-10" style={{ maxHeight: 500 }}>
        <Console
          logs={logs}
          variant="light"
          logFilter={(log: string) => {
            //ignore vite hot load messages
            return !log.includes('vite');

          }}
        />
      </div>
      {logs.length === 0 && <Empty></Empty>}
    </div>
  );
};

export { LogsContainer };
