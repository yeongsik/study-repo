package backjoon;
/*
https://www.acmicpc.net/problem/10818
 */

import java.io.*;
import java.util.StringTokenizer;

public class Backjoon10818 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int min = 1000000;
        int max = -1000000;

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(st.nextToken());

            min = Math.min(min, num);
            max = Math.max(max, num);

        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        bw.write(min + " " + max);
        bw.flush();
        bw.close();

    }
}
