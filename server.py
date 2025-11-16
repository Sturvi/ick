#!/usr/bin/env python3
"""Simple HTTP server with Range request support for video streaming."""

import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class RangeRequestHandler(SimpleHTTPRequestHandler):
    """HTTP request handler with support for byte-range requests."""

    def end_headers(self):
        """Add headers to support CORS and caching."""
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        """Handle GET requests with Range support."""
        # Get the file path
        path = self.translate_path(self.path)

        # Check if file exists
        if not os.path.exists(path) or not os.path.isfile(path):
            return super().do_GET()

        # Get file size
        file_size = os.path.getsize(path)

        # Check for Range header
        range_header = self.headers.get('Range')

        if range_header:
            # Parse range header
            range_match = range_header.replace('bytes=', '').split('-')
            start = int(range_match[0]) if range_match[0] else 0
            end = int(range_match[1]) if len(range_match) > 1 and range_match[1] else file_size - 1

            # Validate range
            if start >= file_size or end >= file_size or start > end:
                self.send_error(416, 'Requested Range Not Satisfiable')
                return

            # Send 206 Partial Content response
            self.send_response(206)
            self.send_header('Content-Type', self.guess_type(path))
            self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
            self.send_header('Content-Length', str(end - start + 1))
            self.end_headers()

            # Send partial file content
            with open(path, 'rb') as f:
                f.seek(start)
                chunk_size = 8192
                bytes_to_send = end - start + 1
                while bytes_to_send > 0:
                    chunk = f.read(min(chunk_size, bytes_to_send))
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    bytes_to_send -= len(chunk)
        else:
            # No range header - send full file
            super().do_GET()


if __name__ == '__main__':
    port = 8001
    server_address = ('127.0.0.1', port)
    httpd = HTTPServer(server_address, RangeRequestHandler)
    print(f'Server running at http://127.0.0.1:{port}/')
    print('Press Ctrl+C to stop')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
        sys.exit(0)
