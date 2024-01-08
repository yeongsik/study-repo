package backjoon;

import java.io.*;
import java.util.StringTokenizer;

public class Backjoon2675 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(br.readLine());

        for (int i = 0; i < t; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int r = Integer.parseInt(st.nextToken());
            String s = st.nextToken();

            for (char c : s.toCharArray()) {
                for (int j = 0; j < r; j++) {
                    bw.write(c);
                }
            }

            bw.write("\n");
        }

        bw.flush();
        bw.close();
    }
}
