'use client';
import React, { PropsWithChildren, useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HTTPException } from 'hono/http-exception';
const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient({
        queryCache: new QueryCache(
            {
                onError: (err) => {
                    let errorMessage: string
                    if (err instanceof HTTPException) {
                        errorMessage = err.message
                    } else if (err instanceof Error) {
                        errorMessage = err.message
                    } else {
                        errorMessage = 'An error occurred'
                    }
                    console.log(errorMessage);
                }
            }
        )
    }));
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default TanstackQueryProvider