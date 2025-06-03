"use client";

import {AlignJustifyIcon} from "@/components/tiptap-icons/align-justify-icon";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="dropdown me-auto">
                    <button
                        className="btn btn-clear dropdown-toggle border-0 shadow-none"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <AlignJustifyIcon className="tiptap-button-icon" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <h1 className="navbar-brand">PenPal.ai</h1>
                <a>an essay assistant created for writers</a>
                <div className="collapse navbar-collapse"></div>
            </div>
        </nav>
    );
}
