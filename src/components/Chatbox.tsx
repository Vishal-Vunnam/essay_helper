'use client'

import { useState } from 'react';

export default function Chatbox() {
    return (
        <div className="p-3 border rounded bg-light">
          <textarea
            className="form-control mb-2"
            rows={3}
            placeholder="Type your message..."

          />
        </div>
      )
}