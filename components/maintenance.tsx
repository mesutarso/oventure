import { AlertCircle } from "lucide-react"

export default function MaintenanceMode() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <div className="mx-auto max-w-md text-center">
                <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-blue-100 p-4">
                        <AlertCircle className="h-24 w-24 text-primary" />
                    </div>
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary">Maintenance du site</h1>
                <p className="mb-8 text-lg text-gray-600">
                    Nous effectuons actuellement une maintenance programmée. Nous serons de retour sous peu.
                </p>
                <div className="flex items-center justify-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse delay-150"></div>
                </div>
            </div>
        </div>
    )
}
