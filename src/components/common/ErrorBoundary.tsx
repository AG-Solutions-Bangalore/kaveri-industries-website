import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // wire into Sentry / Datadog here
    console.error("[ErrorBoundary]", error, info);
  }

  reset = () => this.setState({ error: null });

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto max-w-md py-24 text-center">
          <p className="text-7xl font-semibold tracking-tight">⚠︎</p>
          <h1 className="mt-4 text-2xl font-medium">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">
            {this.state.error.message ?? "Unexpected error"}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={this.reset}
              className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent"
            >
              Try again
            </button>
            <Link
              to="/"
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
            >
              Home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}