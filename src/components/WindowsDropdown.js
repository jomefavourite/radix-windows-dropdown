import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import windowsTerminal from "../images/Windows_Terminal_logo.svg";
import viewIcon from "../images/view.svg";
import refresh from "../images/refresh.svg";
import sort from "../images/sort.svg";

const views = [
  {
    view: "Large icons",
    key: "Ctrl+Shift+2"
  },
  {
    view: "Medium icons",
    key: "Ctrl+Shift+2"
  },
  {
    view: "Small icons",
    key: "Ctrl+Shift+2"
  }
];

function WindowsDropdown() {
  const [view, setView] = React.useState("Small icons");
  return (
    <DropdownMenu.Root className="root">
      <DropdownMenu.Trigger className="trigger">Click me</DropdownMenu.Trigger>

      <DropdownMenu.Content loop className="content">
        <DropdownMenu.Root>
          <DropdownMenu.TriggerItem className="item">
            <img src={viewIcon} alt="view icon" className="option-icon" />
            View
            <div style={{ marginLeft: "auto" }}>
              <ChevronRightIcon />
            </div>
          </DropdownMenu.TriggerItem>
          <DropdownMenu.Content className="content content--drop">
            <DropdownMenu.RadioGroup value={view} onValueChange={setView}>
              {views.map(({ view, key }, i) => (
                <DropdownMenu.RadioItem key={i} value={view} className="item">
                  <DropdownMenu.ItemIndicator className="item-indicator">
                    <DotFilledIcon />
                  </DropdownMenu.ItemIndicator>
                  {view}

                  <kbd>{key}</kbd>
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Separator className="separator" />

            <DropdownMenu.Item className="item" disabled>
              Auto arrange icons
            </DropdownMenu.Item>
            <DropdownMenu.Item className="item" disabled>
              Align icons to grid
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.TriggerItem className="item">
            <img src={sort} alt="sort by" className="option-icon" />
            Sort by
            <div style={{ marginLeft: "auto" }}>
              <ChevronRightIcon />
            </div>
          </DropdownMenu.TriggerItem>
          <DropdownMenu.Content className="content content--drop">
            {["Name", "Size", "Item type", "Date modified"].map((sort, i) => (
              <DropdownMenu.Item key={i} value={sort} className="item" disabled>
                {sort}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Item className="item">
          <img src={refresh} alt="" className="option-icon" />
          Refresh
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="separator" />

        <DropdownMenu.Item className="item">
          New
          <div style={{ marginLeft: "auto" }}>
            <ChevronRightIcon />
          </div>
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="separator" />

        <DropdownMenu.Item className="item">Display settings</DropdownMenu.Item>
        <DropdownMenu.Item className="item">Personalise</DropdownMenu.Item>

        <DropdownMenu.Separator className="separator" />

        <DropdownMenu.Item className="item">
          <img
            src={windowsTerminal}
            alt="windows terminal"
            className="option-icon"
          />
          Open in Windows Terminal
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="separator" />

        <DropdownMenu.Item className="item item-flex">
          Show more options
          <kbd>Shift+F10</kbd>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default WindowsDropdown;
